/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SK1010', {
    K1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    K1_PREFIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    K1_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    K1_PARCELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    K1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    K1_OPERAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    K1_VENCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    K1_VENCREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    K1_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    K1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    K1_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    K1_PORTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    K1_SITUACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    K1_SALDEC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    K1_FILORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    K1_SALDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    }
  }, {
    tableName: 'SK1010'
  });
};
