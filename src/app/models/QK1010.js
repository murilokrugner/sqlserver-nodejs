/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QK1010', {
    QK1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK1_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QK1_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK1_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK1_DTREVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK1_PCCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QK1_DESCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QK1_PPAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QK1_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    QK1_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QK1_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK1_NDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QK1_REVDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QK1_DTRDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK1_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QK1_ALTENG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    QK1_DTENG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK1_TPLOGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QK1_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QK1_CODEQU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QK1_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QK1_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QK1_JUST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QK1_DTENCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK1_DTREAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK1_LICPK: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QK1_LSCPK: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QK1_NALPRJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QK1_ALTDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QK1_CODVCL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    tableName: 'QK1010'
  });
};
