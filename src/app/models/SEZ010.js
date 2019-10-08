/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEZ010', {
    EZ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EZ_PREFIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EZ_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EZ_PARCELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EZ_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EZ_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EZ_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EZ_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EZ_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EZ_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EZ_RECPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EZ_PERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EZ_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EZ_ITEMCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EZ_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EZ_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EZ_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EZ_SITUACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    EZ_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EZ_IDDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    }
  }, {
    tableName: 'SEZ010'
  });
};
