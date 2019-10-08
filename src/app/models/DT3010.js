/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DT3010', {
    DT3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT3_CODPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT3_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DT3_TIPFAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT3_FAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT3_ATALHO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT3_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT3_APLDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT3_AGRVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT3_CALPES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT3_FRACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT3_TAXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT3_PSQTXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT3_PSQTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT3_TIPVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DT3_FAIXA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    DT3_TIPCMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DT3_TXADIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    DT3_RECEIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'DT3010'
  });
};
