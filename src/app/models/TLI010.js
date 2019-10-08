/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TLI010', {
    TLI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TLI_SIPAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TLI_DTPROG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLI_HRPROG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TLI_HRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TLI_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    TLI_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    TLI_INDRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLI_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TLI_NOMRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TLI_OBSERV: {
      type: "VARBINARY",
      allowNull: true
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
    tableName: 'TLI010'
  });
};
