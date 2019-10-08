/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C00010', {
    C00_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C00_CHVNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    C00_SERNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C00_NUMNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C00_VLDOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C00_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C00_SITDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C00_NOEMIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    C00_CNPJEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    C00_IEEMIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    C00_MESNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C00_ANONFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C00_DTEMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C00_DTREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C00_CODRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C00_DESRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    C00_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C00_CODEVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'C00010'
  });
};
