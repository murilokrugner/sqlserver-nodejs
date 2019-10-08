/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEA010', {
    EA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EA_PREFIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EA_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EA_PARCELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EA_PORTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EA_AGEDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EA_NUMBOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EA_DATABOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EA_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EA_CART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EA_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EA_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EA_NUMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EA_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EA_TIPOPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EA_TRANSF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EA_SITUACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EA_SITUANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EA_SALDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EA_OCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EA_FILORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EA_PORTANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EA_AGEANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EA_CONTANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EA_DEBITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EA_CCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EA_ITEMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EA_CLVLDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EA_CREDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EA_CCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EA_ITEMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EA_CLVLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    EA_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'SEA010'
  });
};
