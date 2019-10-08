/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ADY010', {
    ADY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADY_PROPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADY_PREVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADY_OPORTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADY_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADY_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADY_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADY_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADY_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADY_ORCAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADY_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADY_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADY_LOJENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADY_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADY_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADY_TPCONT: {
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
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADY_VISTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADY_CODVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADY_SITVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADY_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADY_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADY_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADY_TPPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADY_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_DTREVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_SINCPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    ADY_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADY_PCALC: {
      type: "IMAGE",
      allowNull: true
    },
    ADY_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    ADY_HREMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_USREMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADY_DTUPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_HRUPLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_USRUPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADY_DTAPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_HRAPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_USRAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADY_DTPDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_HRPDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_USRPDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADY_DTFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_HRFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_USRFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADY_DTREPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_HRREPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_USREPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADY_MTREPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADY_OBSREP: {
      type: "IMAGE",
      allowNull: true
    },
    ADY_DTAPRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_HRAPRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADY_USAPRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADY_OBSAPR: {
      type: "IMAGE",
      allowNull: true
    },
    ADY_LRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    }
  }, {
    tableName: 'ADY010'
  });
};
