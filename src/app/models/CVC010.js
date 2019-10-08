/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CVC010', {
    CVC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVC_CODPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CVC_CODREL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVC_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CVC_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CVC_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CVC_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CVC_NUMRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CVC_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVC_IE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    CVC_IE_ST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    CVC_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    CVC_IM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    CVC_SUFRAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CVC_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CVC_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CVC_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CVC_MUNIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CVC_PARTIC: {
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
    tableName: 'CVC010'
  });
};
