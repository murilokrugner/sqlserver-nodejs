/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SBL010', {
    BL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BL_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BL_ANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BL_MES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BL_DEMANDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BL_TOTDEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BL_TOTCUST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BL_VENDPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BL_FREQUEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BL_TIPCUST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BL_ABCVEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BL_ABCCUST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BL_CODFORM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BL_PORFOR1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BL_QTDFOR1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BL_CODFOR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BL_PORFOR2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BL_QTDFOR2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BL_CODFOR3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BL_PORFOR3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BL_QTDFOR3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BL_CODFOR4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BL_PORFOR4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BL_QTDFOR4: {
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
    tableName: 'SBL010'
  });
};
